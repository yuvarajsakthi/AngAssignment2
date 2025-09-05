interface Products {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
  productOnSale: boolean;
  productRating: number;
  productReviews: {
    reviewerName: string;
    reviewerComment: string;
  }[];
}
