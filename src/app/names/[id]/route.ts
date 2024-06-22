import { data } from "../data";

//show all registers
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const name = data.find((name) => name.id === parseInt(params.id));

  return Response.json(name);
}

//==========================| update register |======================================
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = data.findIndex((user) => user.id == params.id);

  data[index].name = text;
  return Response.json(data[index]);
}

//==========================| delete register |======================================
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = data.findIndex((user) => user.id == params.id);

  const deletedUser = data[index]
  data.splice(index, 1)
  return Response.json(deletedUser)


}
