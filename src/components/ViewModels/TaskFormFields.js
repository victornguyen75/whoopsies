export default function TaskFormFields() {
  return {
    formLabel: "Task Creation Form",
    fields: [
      {
        fieldId: "id",
        fieldLabel: "Task ID",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "project",
        fieldLabel: "Project Name",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "name",
        fieldLabel: "Task Name",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "description",
        fieldLabel: "Task Description",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "status",
        fieldLabel: "Status",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "priority",
        fieldLabel: "Priority",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "sprint",
        fieldLabel: "Sprint",
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
        fieldId: "dateCreated",
        fieldLabel: "Date Created",
        fieldType: "text",
        fieldValue: "",
      },
      {
        fieldId: "dateUpdated",
        fieldLabel: "Date Updated",
        fieldType: "text",
        fieldValue: "",
      },
    ],
  };
}
