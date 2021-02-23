import React, {useState} from 'react';
import PropTypes from 'prop-types'

export const Select = ({
                         inputList,
                         value,
                         callBack,
                         placeholder,
}) => {
  const [selected, setSelected] = useState(value);

  return (
    <div
      className="select"
    >
      <select
        onChange={(e) => {
          const sh = inputList.find(i => i.id === e.target.value);
          setSelected(sh.id);
          callBack(sh.blob)
        }}
        value={selected || undefined}
      >
        <option selected disabled style={{display: 'none'}}>{placeholder}</option>
        {
          inputList.map(i =>
            <option key={i.id} value={i.id}>{i.label}</option>)
        }
      </select>
    </div>
  )
}

Select.propTypes = {
  inputList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      blob: PropTypes.object,
    })
  ),
  value: PropTypes.string,
  callBack: PropTypes.func,
  placeholder: PropTypes.string
}

Select.defaultProps = {
  inputList: [],
  value: null,
  placeholder: 'Faites votre choix',
  callBack: () => undefined,
}
