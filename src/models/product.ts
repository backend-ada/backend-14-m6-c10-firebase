import db from './database/connection';

abstract class ProductModel {
	static async getAll() {
		const documentsRef = db.collection('products'); // Tramos la data de la collection products.
		const snapshot = await documentsRef.get();

		const documentsCollection = [] as any;

		snapshot.forEach((doc: any) => {
			documentsCollection.push(doc.data());
		});

		return documentsCollection;
	}

	static async createOne(data: any) {
		const { collectionName, productData } = data;

		const newProduct = await db.collection(collectionName).add(productData);
		return newProduct;
	}
}

export default ProductModel;
