export default function TaskFormFields() {
  return {
    formLabel: "Task Creation Form",
    fields: [
      {
        fieldId: "name",
        fieldLabel: "Task Name",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "status",
        fieldLabel: "Status",
        fieldType: "select",
        fieldOptions: [
          "TO DO",
          "IN ANALYSIS",
          "IN DEVELOPMENT",
          "IN TESTING",
          "DONE",
        ],
        fieldValue: "TO DO",
      },
      {
        fieldId: "priority",
        fieldLabel: "Priority",
        fieldType: "select",
        fieldOptions: ["Cosmetic", "Low", "Medium", "High", "Showstopper"],
        fieldValue: "Cosmetic",
      },
      {
        fieldId: "sprint",
        fieldLabel: "Sprint",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "version",
        fieldLabel: "Project Version",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "release",
        fieldLabel: "Release Date",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "description",
        fieldLabel: "Task Description",
        fieldType: "text-long",
        fieldValue: "",
      },
      {
        fieldId: "create",
        fieldLabel: "Create",
        fieldType: "button",
      },
      {
        fieldId: "reset",
        fieldLabel: "Reset the form after creating this task",
        fieldType: "checkbox",
        fieldValue: true,
      },
    ],
  };
}
