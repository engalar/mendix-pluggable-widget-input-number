/**
 * This file was generated from InputNumber.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export interface InputNumberContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    attribute?: EditableValue<Big>;
}

export interface InputNumberPreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    attribute: string;
}
