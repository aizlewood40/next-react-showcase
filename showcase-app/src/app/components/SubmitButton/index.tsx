import { useFormStatus } from "react-dom"

const SubmitButton: React.FC = () => {
    const status = useFormStatus();
    return (
        <button>
            {status.pending ? "Saving...": "Save"}
        </button>
    )
};

export default SubmitButton;