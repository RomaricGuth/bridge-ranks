import Dropdown from "./dropdown";

export default function MultiSelectDropdown({options, placeholder, selected, onSelectChange}) {
    const _onSelect = (_option, index) => {
        const newSelected = {...selected};
        newSelected[index] = !selected[index];
        onSelectChange(newSelected);
    }

    const renderPlaceholder = () => (
        <div>{placeholder}</div>
    )

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
        <Dropdown options={options} onSelect={_onSelect} renderPlaceholder={renderPlaceholder} renderOption={renderOption} closeOnSelect={false}/>
    )
}