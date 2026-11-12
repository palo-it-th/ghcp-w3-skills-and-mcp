import { Transform, Hyperlink, Node, Style, GetFileResponse, GetFileNodesResponse } from '@figma/rest-api-spec';

type SimplifiedImageFill = {
    type: "IMAGE";
    imageRef?: string;
    gifRef?: string;
    scaleMode: "FILL" | "FIT" | "TILE" | "STRETCH";
    scalingFactor?: number;
    backgroundSize?: string;
    backgroundRepeat?: string;
    isBackground?: boolean;
    objectFit?: string;
    imageDownloadArguments?: {
        needsCropping: boolean;
        requiresImageDimensions: boolean;
        cropTransform?: Transform;
        filenameSuffix?: string;
    };
};
type SimplifiedPatternFill = {
    type: "PATTERN";
    patternSource: {
        type: "IMAGE-PNG";
        nodeId: string;
    };
    backgroundRepeat: string;
    backgroundSize: string;
    backgroundPosition: string;
};

type CSSRGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type CSSHexColor = `#${string}`;

type SimplifiedGradientFill = {
    type: "GRADIENT_LINEAR" | "GRADIENT_RADIAL" | "GRADIENT_ANGULAR" | "GRADIENT_DIAMOND";
    gradient: string;
};

type SimplifiedFill = SimplifiedImageFill | SimplifiedGradientFill | SimplifiedPatternFill | CSSRGBAColor | CSSHexColor;
type SimplifiedStroke = {
    colors: SimplifiedFill[];
    strokeWeight?: string;
    strokeDashes?: number[];
    strokeWeights?: string;
    strokeAlign?: "INSIDE" | "OUTSIDE" | "CENTER";
};

type SimplifiedTextStyle = Partial<{
    fontFamily: string;
    fontStyle: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: string;
    letterSpacing: string;
    textCase: string;
    textAlignHorizontal: string;
    textAlignVertical: string;
    italic: boolean;
    textDecoration: "STRIKETHROUGH" | "UNDERLINE" | "NONE";
    hyperlink: Hyperlink;
    opentypeFlags: Record<string, number>;
    paragraphSpacing: number;
    paragraphIndent: number;
    listSpacing: number;
    fills: SimplifiedFill[];
}>;

interface SimplifiedLayout {
    mode: "none" | "row" | "column" | "grid";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "baseline" | "stretch";
    alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "baseline" | "stretch";
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch" | "start" | "end";
    wrap?: boolean;
    gap?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    gridColumn?: string;
    gridRow?: string;
    justifySelf?: "start" | "end" | "center";
    zIndex?: number;
    locationRelativeToParent?: {
        x: number;
        y: number;
    };
    dimensions?: {
        width?: number;
        height?: number;
        aspectRatio?: number;
    };
    designedWidth?: string;
    designedHeight?: string;
    padding?: string;
    sizing?: {
        horizontal?: "fixed" | "fill" | "hug" | "contextual";
        vertical?: "fixed" | "fill" | "hug" | "contextual";
    };
    overflowScroll?: ("x" | "y")[];
    position?: "absolute";
}

type SimplifiedEffects = {
    boxShadow?: string;
    filter?: string;
    backdropFilter?: string;
    textShadow?: string;
};

interface SimplifiedPropertyDefinition {
    type: string;
    defaultValue: boolean | string;
}
interface SimplifiedComponentDefinition {
    id: string;
    key: string;
    name: string;
    componentSetId?: string;
    propertyDefinitions?: Record<string, SimplifiedPropertyDefinition>;
}
interface SimplifiedComponentSetDefinition {
    id: string;
    key: string;
    name: string;
    description?: string;
    propertyDefinitions?: Record<string, SimplifiedPropertyDefinition>;
}

type StyleTypes = SimplifiedTextStyle | SimplifiedFill[] | SimplifiedLayout | SimplifiedStroke | SimplifiedEffects | string;
type GlobalVars = {
    styles: Record<string, StyleTypes>;
};
interface TraversalContext {
    globalVars: GlobalVars;
    extraStyles?: Record<string, Style>;
    currentDepth: number;
    parent?: Node;
    insideComponentDefinition?: boolean;
    traversalState: TraversalState;
    nodeCounter: NodeCounter;
}
type NodeCounter = {
    count: number;
};
interface TraversalState {
    componentPropertyDefinitions: Record<string, Record<string, SimplifiedPropertyDefinition>>;
    tsCounter: number;
    namedStyleKeys: Set<string>;
}
interface TraversalOptions {
    maxDepth?: number;
    nodeFilter?: (node: Node) => boolean;
    afterChildren?: (node: Node, result: SimplifiedNode, children: SimplifiedNode[]) => SimplifiedNode[];
    nodeCounter?: NodeCounter;
}
type ExtractorFn = (node: Node, result: SimplifiedNode, context: TraversalContext) => void;
interface SimplifiedDesign {
    name: string;
    nodes: SimplifiedNode[];
    components: Record<string, SimplifiedComponentDefinition>;
    componentSets: Record<string, SimplifiedComponentSetDefinition>;
    globalVars: GlobalVars;
    elements: Record<string, ElementBody>;
}
type ElementBody = Omit<SimplifiedNode, "id" | "name" | "children" | "template">;
interface SimplifiedNode {
    id: string;
    name?: string;
    type?: string;
    template?: string;
    text?: string;
    textStyle?: string | SimplifiedTextStyle;
    boldWeight?: number;
    fills?: string | SimplifiedFill[];
    styles?: string;
    strokes?: string | SimplifiedFill[];
    strokeWeight?: string;
    strokeDashes?: number[];
    strokeWeights?: string;
    strokeAlign?: "INSIDE" | "OUTSIDE" | "CENTER";
    effects?: string | SimplifiedEffects;
    opacity?: number;
    borderRadius?: string;
    layout?: string | SimplifiedLayout;
    componentId?: string;
    componentProperties?: Record<string, boolean | string>;
    componentPropertyReferences?: Record<string, string>;
    children?: SimplifiedNode[];
}

declare function extractFromDesign(nodes: Node[], extractors: ExtractorFn[], options?: TraversalOptions, globalVars?: GlobalVars, extraStyles?: Record<string, Style>): Promise<{
    nodes: SimplifiedNode[];
    globalVars: GlobalVars;
    traversalState: TraversalState;
}>;

declare function simplifyRawFigmaObject(apiResponse: GetFileResponse | GetFileNodesResponse, nodeExtractors: ExtractorFn[], options?: TraversalOptions): Promise<SimplifiedDesign>;

declare const layoutExtractor: ExtractorFn;
declare const textExtractor: ExtractorFn;
declare const visualsExtractor: ExtractorFn;
declare const componentExtractor: ExtractorFn;
declare const allExtractors: ExtractorFn[];
declare const layoutAndText: ExtractorFn[];
declare const contentOnly: ExtractorFn[];
declare const visualsOnly: ExtractorFn[];
declare const layoutOnly: ExtractorFn[];
declare function collapseSvgContainers(node: Node, result: SimplifiedNode, children: SimplifiedNode[]): SimplifiedNode[];

export { type ExtractorFn, type GlobalVars, type SimplifiedDesign, type StyleTypes, type TraversalContext, type TraversalOptions, allExtractors, collapseSvgContainers, componentExtractor, contentOnly, extractFromDesign, layoutAndText, layoutExtractor, layoutOnly, simplifyRawFigmaObject, textExtractor, visualsExtractor, visualsOnly };
