export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      account: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      animal: {
        Row: {
          animal_name: string | null
          animal_ref: string | null
          animal_thumbnail: string | null
          created_at: string
          id: number
        }
        Insert: {
          animal_name?: string | null
          animal_ref?: string | null
          animal_thumbnail?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          animal_name?: string | null
          animal_ref?: string | null
          animal_thumbnail?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      animal_races: {
        Row: {
          animal_id: number | null
          created_at: string
          id: number
          race_name: string | null
          race_value: string | null
        }
        Insert: {
          animal_id?: number | null
          created_at?: string
          id?: number
          race_name?: string | null
          race_value?: string | null
        }
        Update: {
          animal_id?: number | null
          created_at?: string
          id?: number
          race_name?: string | null
          race_value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "animal_race_animal_id_fkey"
            columns: ["animal_id"]
            isOneToOne: false
            referencedRelation: "animal"
            referencedColumns: ["id"]
          },
        ]
      }
      banner: {
        Row: {
          banner: string | null
          created_at: string
          id: number
          is_active: boolean | null
        }
        Insert: {
          banner?: string | null
          created_at?: string
          id?: number
          is_active?: boolean | null
        }
        Update: {
          banner?: string | null
          created_at?: string
          id?: number
          is_active?: boolean | null
        }
        Relationships: []
      }
      blog: {
        Row: {
          content: string | null
          created_at: string
          id: number
          thumbnail: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          thumbnail?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          thumbnail?: string | null
        }
        Relationships: []
      }
      chat: {
        Row: {
          content: string | null
          created_at: string
          id: number
          media: string | null
          media_type: string | null
          sender_id: number | null
          transaction_id: number | null
          type: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          media?: string | null
          media_type?: string | null
          sender_id?: number | null
          transaction_id?: number | null
          type?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          media?: string | null
          media_type?: string | null
          sender_id?: number | null
          transaction_id?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_transaction_id_fkey"
            columns: ["transaction_id"]
            isOneToOne: false
            referencedRelation: "transaction"
            referencedColumns: ["id"]
          },
        ]
      }
      clinic: {
        Row: {
          clinic_banner: string | null
          clinic_location: string | null
          clinic_name: string | null
          created_at: string
          id: number
          owner: number | null
        }
        Insert: {
          clinic_banner?: string | null
          clinic_location?: string | null
          clinic_name?: string | null
          created_at?: string
          id?: number
          owner?: number | null
        }
        Update: {
          clinic_banner?: string | null
          clinic_location?: string | null
          clinic_name?: string | null
          created_at?: string
          id?: number
          owner?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "clinic_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
        ]
      }
      doctor: {
        Row: {
          account_id: number | null
          created_at: string
          doctor_experience: string | null
          doctor_name: string | null
          doctor_profile_picture: string | null
          id: number
        }
        Insert: {
          account_id?: number | null
          created_at?: string
          doctor_experience?: string | null
          doctor_name?: string | null
          doctor_profile_picture?: string | null
          id?: number
        }
        Update: {
          account_id?: number | null
          created_at?: string
          doctor_experience?: string | null
          doctor_name?: string | null
          doctor_profile_picture?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "doctor_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
        ]
      }
      pet: {
        Row: {
          animal_id: number | null
          created_at: string
          id: number
          owner_id: number | null
          pet_dob: string | null
          pet_gender: string | null
          pet_name: string | null
          pet_race_id: number | null
          pet_thumbnail: string | null
          pet_weight: number | null
        }
        Insert: {
          animal_id?: number | null
          created_at?: string
          id?: number
          owner_id?: number | null
          pet_dob?: string | null
          pet_gender?: string | null
          pet_name?: string | null
          pet_race_id?: number | null
          pet_thumbnail?: string | null
          pet_weight?: number | null
        }
        Update: {
          animal_id?: number | null
          created_at?: string
          id?: number
          owner_id?: number | null
          pet_dob?: string | null
          pet_gender?: string | null
          pet_name?: string | null
          pet_race_id?: number | null
          pet_thumbnail?: string | null
          pet_weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pet_animal_id_fkey"
            columns: ["animal_id"]
            isOneToOne: false
            referencedRelation: "animal"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pet_pet_race_id_fkey"
            columns: ["pet_race_id"]
            isOneToOne: false
            referencedRelation: "animal_races"
            referencedColumns: ["id"]
          },
        ]
      }
      product: {
        Row: {
          created_at: string
          id: number
          product_description: string | null
          product_name: string | null
          product_price: number | null
          product_thumbnail: string | null
          product_url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          product_description?: string | null
          product_name?: string | null
          product_price?: number | null
          product_thumbnail?: string | null
          product_url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          product_description?: string | null
          product_name?: string | null
          product_price?: number | null
          product_thumbnail?: string | null
          product_url?: string | null
        }
        Relationships: []
      }
      transaction: {
        Row: {
          consultation_at: string | null
          created_at: string
          id: number
          payment_status: string | null
          user_id: number | null
        }
        Insert: {
          consultation_at?: string | null
          created_at?: string
          id?: number
          payment_status?: string | null
          user_id?: number | null
        }
        Update: {
          consultation_at?: string | null
          created_at?: string
          id?: number
          payment_status?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transaction_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "account"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
