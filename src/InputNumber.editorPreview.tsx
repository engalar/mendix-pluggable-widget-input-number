import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { InputNumberPreviewProps } from "../typings/InputNumberProps";

declare function require(name: string): string;

export function preview(props: InputNumberPreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
