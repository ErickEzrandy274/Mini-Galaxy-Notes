import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { InputType } from "../Form/interface";

export interface ButtonProps {
    className: string
    type: 'button' | 'submit'
    iconName: IconDefinition
    buttonName: string
    handleClick?: (buttonName: string) => void
    objKey?: string | null | undefined
    field?: InputType
}