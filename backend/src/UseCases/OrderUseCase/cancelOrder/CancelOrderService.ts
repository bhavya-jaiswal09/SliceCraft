import { ICancelOrderRepository } from "../../../Repository/IRepository";
import Token from "../../../utils/GenerateToken";
import CustomError from "../../../Error/CustomError";
import generateDate from "../../../utils/genereteDate";

export default class CancelOrderService {
  constructor(private repository: ICancelOrderRepository) { }

  public async cancel(token: string, orderId: string) {
    const { id, email } = Token.authToken(token);

    const user = await this.repository.user.findOne({ id });

    if (!user || user.email !== email) throw new CustomError("User not found", 401);

    const order = await this.repository.order.findOne({ id: orderId });

    if (!order || order.status === 'Cancelled') throw new CustomError("Order not found or already cancelled", 400);

    const maxMinutesToCancel = 1000 * 300;
    const orderDate = new Date(order.date).getTime() + maxMinutesToCancel;

    const date = generateDate();

    if (new Date(date).getTime() > orderDate) throw new CustomError("Cannot cancel order after 5 minutes", 400);

    await this.repository.order.update(order, { status: 'Cancelled' });

    return { message: "Order cancelled successfully" };
  }
}
