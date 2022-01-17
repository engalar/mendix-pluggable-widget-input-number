import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { InputNumberPreviewProps } from "../typings/InputNumberProps";

export function getProperties(
    values: InputNumberPreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: InputNumberPreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
