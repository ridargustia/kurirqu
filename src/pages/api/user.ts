// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from '@/utils/db/services';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: boolean,
  statusCode: number,
  data: any
//   data: {
//     name: string,
//     birthdate: string,
//     birthplace: string,
//     gender: number,
//     address: string,
//     phone: string,
//     email: string,
//     username: string,
//     password: string,
//     usertypeId: number,
//     isActive: boolean,
//     photo: string,
//     photoThumb: string,
//     lastLogin: string,
//     createdBy: string,
//     createdAt: string,
//     modifiedBy: string,
//     modifiedAt: string,
//     isDelete: boolean,
//     deletedBy: string,
//     deletedAt: string,
//   }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("users");

  res.status(200).json({
    status: true,
    statusCode: 200,
    data: data,
 })
}
