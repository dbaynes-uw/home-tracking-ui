export default function SetupFormComponent (props, { emit }) {
  const updateValue = (form) => {
    let val = form.target.value

    if (form.target.type === 'checkbox') val = form.target.checked
    if (form.target.type === 'radio') val = props.value

    emit('update:modelValue', val)
  }

  return { updateValue }
}
