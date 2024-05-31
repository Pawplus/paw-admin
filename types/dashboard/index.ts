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

//   Detail Consultation types
type Consultation = {
    id: string;
    orderDate: string;
    orderTime: string;
    email: string;
    service: string;
    doctor: string;
    paymentAmount: string;
    uniqueCode: string;
    paymentMethod: string;
    pet: {
        name: string;
        age: string;
        breed: string;
        gender: string;
        notes: string;
    };
    history: Array<{
        date: string;
        service: string;
        notes: string;
        chatLink: string;
    }>;
}



export type { recentTrans, productPerformanceType, productsCards, Payment, Consultation }