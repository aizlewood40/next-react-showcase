import { useFormStatus } from "react-dom"

const SubmitButton = () => {
    const status = useFormStatus();
    return (
        <button>
            {status.pending ? "Saving...": "Save"}
        </button>
    )
};

export default SubmitButton;