const mongoose = require('mongoose');
const {Schema} = mongoose;


const cartSchema = new Schema(

 {
        title: { type : Schema.Types.Mixed},
        description: { type : Schema.Types.Mixed},
        price: { type: Number },
        discountPercentage: { type: Number },
        rating: { type: Number },
        stock: { type: Number },
        brand: { type : Schema.Types.Mixed},
        category: { type : Schema.Types.Mixed},
        thumbnail: { type : Schema.Types.Mixed},
        images:{ type : Schema.Types.Mixed},
        productId: { type: Number },
        quantity: { type: Number },
        user: { type: String },
        size: { type : Schema.Types.Mixed},
        color: { type : Schema.Types.Mixed},
     }
)
const virtual  = cartSchema.virtual('id');
virtual.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.Cart = mongoose.model('Cart',cartSchema)