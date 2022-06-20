import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export interface ButtonProps {
    className: string
    type: 'button' | 'submit'
    iconName: IconDefinition
    buttonName: string
    handleClick?: (buttonName: string) => void
}