// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("error :", err);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
