export interface SimpleUser {
    user_id:              string;
    activity_level:       ActivityLevel;
    age:                  number;
    daily_caloric_intake: number;
    email:                string;
    first_name:           string;
    height:               number;
    last_name:            string;
    weight:               number;
    gender:               string;
}

export enum ActivityLevel {
    Medio = "medio",
    Alto = "alto",
    Bajo = "bajo"
}