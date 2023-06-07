import Dropdown from "./dropdown";

export default function MultiSelectDropdown({selected, onSelectChange, ...props}) {
    const _onSelect = (_option, index) => {
        const newSelected = {...selected};
        newSelected[index] = !selected[index];
        onSelectChange(newSelected);
    }

    const renderOption = (option, index) => (
        <div>
            {option}
            <input
                type="checkbox"
                className="form-checkbox text-indigo-600 ml-2"
                checked={selected[index]}
            />
        </div>
    )

    return (
        <Dropdown renderOption={renderOption} closeOnSelect={false} onSelect={_onSelect} {...props} />
    )
}