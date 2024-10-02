import { getUser } from "./service/getUser.js";

async function printUser() {
  const { success, data } = await getUser();
  console.log({ success, data });

  if (!success) return;

  const user = document.getElementById("user");
  user.textContent = data.name[0];
  user.classList.add("userBubble");
}

export { printUser };
