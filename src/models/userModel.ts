import * as mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  id: String
});

const User = mongoose.model("User", UserSchema);

export class UserRequest {
  assertion: String;
  type: String;

  constructor(Obj: any) {
    this.assertion = Obj.assertion;
    this.type = Obj.type;
  }
}
