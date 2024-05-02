export interface FoodDetail {
  name: string,
  calories: number,
  proteins: number,
  serving_size: string,
  fats: number,
}

export interface FoodRecord {
  record_id : string,
  user_id :string,
  food_id : string,
  date : Date,
  meal_type : string,
  quantity : number,
  details: FoodDetail
  }

