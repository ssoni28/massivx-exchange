export class Ticket {
  _id: String;
  name: String;
  description: String;
  type: String;
  userId: String;
  constructor(userId: String, name: String, description: String, type: String) {
    this.userId = userId;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
