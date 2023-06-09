"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export default function Dropdown({options, placeholder, renderOption, onSelect, closeOnSelect}) {
    const [opened, setOpened] = useState(false);
    const dropdownRef = useRef(null);

    const toggle = useCallback(() => setOpened(!opened), [opened, setOpened]);

    const handleClickOutside = useCallback((event) => {
        if (opened && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpened(false);
          event.preventDefault();
        }
    }, [opened]);
    
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    const _onSelect = (val, index) => {
        if (onSelect) {
            onSelect(val, index);
        }

        // close by default
        if (closeOnSelect !== false) {
            setOpened(false);
        }
    };

    const _renderPlaceholder = (opened) => {
        if (typeof placeholder === 'string') {
            return (
                <div>
                    {placeholder}
                </div>
            )
        } else { // placeholder props can be a render function
            return placeholder(opened);
        }
    }

    const _renderOption = (val, index) => {
        if (renderOption) {
            return renderOption(val, index);
        } else {
            return (
                <div>
                    {val}
                </div>
            )
        }
    }

    return (
        <div class="relative" ref={dropdownRef}>
            <button
                class="flex items-center gap-4 px-2 py-1 border-2 rounded-lg focus:outline-none"
                onClick={toggle}>
                {_renderPlaceholder(opened)}
                <i class="fa-solid fa-caret-down"></i>
            </button>
            {opened && (
                <div class="absolute left-0 mt-2  shadow-lg z-10 rounded-lg max-h-[50vh] overflow-y-scroll">
                {options.map((val, index) => (
                    <button key={val} class="flex items-center w-full px-4 py-2 bg-white hover:bg-gray-400" onClick={() => _onSelect(val, index)}>
                        {_renderOption(val, index)}
                    </button>
                ))}
                </div>
            )}
        </div>
    )
}