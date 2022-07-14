import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SetStateAction } from "react";

export interface ModalProps {
    setModalOpen: React.Dispatch<SetStateAction<boolean>>
    onClick: () => void
    type: "delete" | "update"
}

export interface LabelModalProps {
    labelName: "Save" | "Delete"
    icon: IconDefinition
    className: string
    setIsModalOpen: React.Dispatch<SetStateAction<boolean>>
    setModalType: React.Dispatch<SetStateAction<"delete" | "update">>
}