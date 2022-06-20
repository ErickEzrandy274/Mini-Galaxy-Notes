export interface InputType {
    title: string
    content: string
}

export interface InputProps {
    type?: string
    placeholder: string
    name: string
    handleChange: (e: any) => void
    value: string
}