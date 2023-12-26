import Form from "./Form"

export default function FormPost() {
  const form = {
    title: "",
    body: "",
    id: "",
  };

  return (
    <Form form={form} type="create" />
  )
}
