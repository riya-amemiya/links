export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      zipcode_list: {
        Row: {
          Area_Name: string | null;
          Area_Name_Kana: string | null;
          Change_Reason: string;
          City_Ward_Town_Village_Name: string;
          City_Ward_Town_Village_Name_Kana: string;
          id: number;
          Indicates_a_Subarea_with_Numbered_Addresses: string;
          Indicates_More_Than_One_Postal_Code_for_the_Same_Area: string;
          Indicates_One_Postal_Code_for_Multiple_Areas: string;
          Indicates_Presence_of_Chome_in_the_Area: string;
          JIS_Code: string;
          Old_Postal_Code: string;
          Postal_Code: string;
          Prefecture_Name: string;
          Prefecture_Name_Kana: string;
          Update_Display: string;
        };
        Insert: {
          Area_Name?: string | null;
          Area_Name_Kana?: string | null;
          Change_Reason: string;
          City_Ward_Town_Village_Name: string;
          City_Ward_Town_Village_Name_Kana: string;
          id: number;
          Indicates_a_Subarea_with_Numbered_Addresses: string;
          Indicates_More_Than_One_Postal_Code_for_the_Same_Area: string;
          Indicates_One_Postal_Code_for_Multiple_Areas: string;
          Indicates_Presence_of_Chome_in_the_Area: string;
          JIS_Code: string;
          Old_Postal_Code: string;
          Postal_Code: string;
          Prefecture_Name: string;
          Prefecture_Name_Kana: string;
          Update_Display: string;
        };
        Update: {
          Area_Name?: string | null;
          Area_Name_Kana?: string | null;
          Change_Reason?: string;
          City_Ward_Town_Village_Name?: string;
          City_Ward_Town_Village_Name_Kana?: string;
          id?: number;
          Indicates_a_Subarea_with_Numbered_Addresses?: string;
          Indicates_More_Than_One_Postal_Code_for_the_Same_Area?: string;
          Indicates_One_Postal_Code_for_Multiple_Areas?: string;
          Indicates_Presence_of_Chome_in_the_Area?: string;
          JIS_Code?: string;
          Old_Postal_Code?: string;
          Postal_Code?: string;
          Prefecture_Name?: string;
          Prefecture_Name_Kana?: string;
          Update_Display?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
