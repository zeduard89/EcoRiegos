import api from '../api/baseUrl'
import { useQuery } from '@tanstack/react-query'
import { type IUser } from "../interfaces/UserInterface"

interface IUseUser {
    user: IUser | undefined,
    isLoading:boolean
}

// Axios Function
const getUserById = async (userId:number) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data; // Puedes manejar la respuesta de acuerdo a tus necesidades
    } catch (error) {
      console.error("Error al registrar al usuario:", error);
      throw error;
    }
  };

//React Query
export function useGetAllUsers( userId: number): IUseUser {
    const { data, isLoading } = useQuery({
        queryKey: ['user', userId],
        queryFn : async ()=> await getUserById(userId)
    });

    return {
        user:data,
        isLoading
    };
  }