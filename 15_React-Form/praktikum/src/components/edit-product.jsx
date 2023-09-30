import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

function EditProduct({ initialValue, onSave, fieldName, rules }) {
  const [isEditing, setIsEditing] = useState(false);
  const { handleSubmit, control, setValue } = useForm();
  const [inputValue, setInputValue] = useState(initialValue);

  const handleSave = () => {
    setIsEditing(false);
    onSave(inputValue);
  };

  const handleCancel = () => {
    setInputValue(initialValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit(handleSave)}>
          <Controller
            name={fieldName}
            control={control}
            defaultValue={initialValue}
            rules={rules}
            render={({ field }) => (
              <>
                <input
                  {...field}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Save</button>
                <button type="button" onClick={handleCancel}>
                  Cancel
                </button>
              </>
            )}
          />
        </form>
      ) : (
        <>
          <span>{initialValue}</span>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

export default EditProduct;
