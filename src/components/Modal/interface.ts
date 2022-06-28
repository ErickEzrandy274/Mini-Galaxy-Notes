import { SetStateAction } from "react";

export interface ModalProps {
    setModalOpen: React.Dispatch<SetStateAction<boolean>>
    onClick: () => void
}