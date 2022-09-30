import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "My Task",
    id: "12345",
  });

  await updateTask({
    id: "12345",
    name: "Updated Task",
  });
})();
