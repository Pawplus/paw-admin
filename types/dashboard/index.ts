/*Recent Transaction*/
type recentTrans = {
    title: string;
    subtitle: string;
    textcolor: string;
    boldtext: boolean;
    line: boolean;
    link: string;
    url: string;
};

/*product performance*/
type productPerformanceType = {
    id: number;
    name: string;
    post: string;
    pname: string;
    status: string;
    statuscolor: string;
    budget: string;
};

/*Products card types*/
type productsCards = {
    title: string;
    link: string;
    photo: string;
    salesPrice: number;
    price: number;
    rating: number;
};

// payment verification types
type Payment = {
    no: number
    orderId: string
    orderDate: string
    service: string
    userEmail: string
    doctor: string
    paymentAmount: number
    uniqueCode: string
    paymentMethod: string
    action: string
  }



export type { recentTrans, productPerformanceType, productsCards, Payment }