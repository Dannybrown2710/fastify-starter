import * as mongoose from "mongoose";

export interface Module extends mongoose.Document {
  
}


export const ModuleSchema = new mongoose.Schema({
  demo: {
    type: String,
    required: false,
  }
});

const Schema = new mongoose.Schema(
  {
   demoField: {
       type: String,
       required: true,
   }
  },
  {
    timestamps: {
      updatedAt: "updatedAt",
    },
    collection: "module1",
  }
);
//   Schema.pre('find', async function(){
//     // do stuff;
//     var self = this as any;
//     console.log(self)
//   });
//   Schema.post('find', async function(result){
//     // do stuff;
//     var self = this as any;
//     console.log(self)
//   });
export default Schema;
