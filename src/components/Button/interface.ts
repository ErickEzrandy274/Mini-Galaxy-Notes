import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { InputType } from "../Form/interface";

interface ButtonProps {
    className: string
    type: 'button' | 'submit'
    buttonName: string
}

export interface IconButtonProps extends ButtonProps {
    iconName: IconDefinition
    handleClick?: (buttonName: string) => void
    objKey?: string | null | undefined
    field?: InputType
}

export interface BasicButtonProps extends ButtonProps {}