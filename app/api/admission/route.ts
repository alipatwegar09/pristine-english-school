// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";


// export async function POST(req: Request) {

//   try {

//     const body = await req.json();


//     const {
//       name,
//       phone,
//       email,
//       className,
//       message
//     } = body;



//     const transporter = nodemailer.createTransport({

//       service: "gmail",

//       auth: {

//         user: process.env.EMAIL_USER,

//         pass: process.env.EMAIL_PASSWORD,

//       },

//     });



//     await transporter.sendMail({

//       from: process.env.EMAIL_USER,

//       to: "mahamadalipatwegar@gmail.com",

//       subject:
//       "New Admission Enquiry - Pristine English School",


//       html: `

//       <h2>New Admission Enquiry</h2>

//       <p><b>Name:</b> ${name}</p>

//       <p><b>Phone:</b> ${phone}</p>

//       <p><b>Email:</b> ${email}</p>

//       <p><b>Class:</b> ${className}</p>

//       <p><b>Message:</b> ${message}</p>

//       `

//     });



//     return NextResponse.json({

//       success:true

//     });



//   } catch(error){


//     return NextResponse.json(

//       {
//         success:false,
//         error:"Email failed"
//       },

//       {
//         status:500
//       }

//     );

//   }

// }

import { NextRequest, NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";


const client = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});


export async function POST(req: NextRequest) {

  try {

    const {
      name,
      phone,
      email,
      className,
      message

    } = await req.json();



    // Email to School

    await client.transactionalEmails.sendTransacEmail({

      sender: {
        name: "Pristine English School Website",
        email: "mahamadalipatwegar@gmail.com",
      },


      to: [
        {
          email: "pristinemiraj@gmail.com",
          name: "Pristine English School",
        },
      ],


      replyTo: {
        email: email,
        name: name,
      },


      subject:
        "New Admission Enquiry - Pristine English School",


      htmlContent: `

      <h2>
      New Admission Enquiry
      </h2>


      <p>
      <b>Name:</b> ${name}
      </p>


      <p>
      <b>Phone:</b> ${phone}
      </p>


      <p>
      <b>Email:</b> ${email}
      </p>


      <p>
      <b>Class:</b> ${className}
      </p>


      <p>
      <b>Message:</b> ${message}
      </p>

      `

    });



    // Confirmation Email to Parent

    if(email){

      await client.transactionalEmails.sendTransacEmail({

        sender:{
          name:"Pristine English School",
          email:"alipatwegar09@gmail.com",
        },


        to:[
          {
            email,
            name,
          }
        ],


        subject:
        "Thank you for contacting Pristine English School",


        htmlContent:`

        <h2>
        Dear ${name},
        </h2>


        <p>
        Thank you for contacting
        <b>
        Pristine English School, Miraj
        </b>
        </p>


        <p>
        We have received your admission enquiry.
        Our team will contact you shortly.
        </p>


        <hr/>


        <p>
        <b>Class:</b>
        ${className}
        </p>


        <p>
        <b>Message:</b>
        ${message}
        </p>


        <br/>


        Regards,<br/>
        <b>
        Pristine English School
        </b>

        `

      });

    }



    return NextResponse.json({
      success:true
    });



  } catch(error:any){


    console.error(
      "BREVO ERROR:",
      error
    );


    return NextResponse.json(
      {
        success:false,
        error:error.message
      },
      {
        status:500
      }
    );


  }

}