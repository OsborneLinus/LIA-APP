import { useState } from "react";
import { useEffect } from "react";
import supabase from "../../src/services/supabase";

function FavoriteHeart({ companyId, userId }) {
  const defaultHeart = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_309_2934)">
        <path
          d="M12 19.6538L11.2423 18.9691C9.61025 17.4781 8.26025 16.2018 7.1923 15.1403C6.12435 14.0788 5.2814 13.1425 4.66345 12.3316C4.0455 11.5207 3.61378 10.7871 3.36828 10.1307C3.12276 9.47426 3 8.814 3 8.1499C3 6.8781 3.43205 5.81015 4.29615 4.94605C5.16025 4.08195 6.2282 3.6499 7.5 3.6499C8.37948 3.6499 9.20448 3.8749 9.975 4.3249C10.7455 4.7749 11.4205 5.42939 12 6.28835C12.5795 5.42939 13.2545 4.7749 14.025 4.3249C14.7955 3.8749 15.6205 3.6499 16.5 3.6499C17.7718 3.6499 18.8398 4.08195 19.7038 4.94605C20.5679 5.81015 21 6.8781 21 8.1499C21 8.814 20.8772 9.47426 20.6317 10.1307C20.3862 10.7871 19.9545 11.5207 19.3365 12.3316C18.7186 13.1425 17.8789 14.0788 16.8173 15.1403C15.7558 16.2018 14.4026 17.4781 12.7577 18.9691L12 19.6538ZM12 18.2999C13.6 16.8538 14.9167 15.615 15.95 14.5836C16.9833 13.5522 17.8 12.6573 18.4 11.899C19 11.1406 19.4167 10.4688 19.65 9.88355C19.8833 9.2983 20 8.72042 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7038 4.6499 14.9692 4.87714 14.2962 5.33163C13.6231 5.78611 13.0205 6.47041 12.4885 7.38453H11.5115C10.9667 6.45759 10.3609 5.77009 9.69423 5.32203C9.02756 4.87394 8.29615 4.6499 7.5 4.6499C6.51282 4.6499 5.68269 4.98324 5.00962 5.6499C4.33654 6.31657 4 7.1499 4 8.1499C4 8.72042 4.11667 9.2983 4.35 9.88355C4.58333 10.4688 5 11.1406 5.6 11.899C6.2 12.6573 7.01667 13.549 8.05 14.574C9.08333 15.599 10.4 16.8409 12 18.2999Z"
          fill="#F52A3B"
        />
      </g>
    </svg>
  );

  const favoriteHeart = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_398_1046)">
        <path
          d="M12 19.6538L11.2423 18.9691C9.61025 17.4781 8.26025 16.2018 7.1923 15.1403C6.12435 14.0788 5.2814 13.1425 4.66345 12.3316C4.0455 11.5207 3.61378 10.7871 3.36828 10.1307C3.12276 9.47426 3 8.814 3 8.1499C3 6.8781 3.43205 5.81015 4.29615 4.94605C5.16025 4.08195 6.2282 3.6499 7.5 3.6499C8.37948 3.6499 9.20448 3.8749 9.975 4.3249C10.7455 4.7749 11.4205 5.42939 12 6.28835C12.5795 5.42939 13.2545 4.7749 14.025 4.3249C14.7955 3.8749 15.6205 3.6499 16.5 3.6499C17.7718 3.6499 18.8398 4.08195 19.7038 4.94605C20.5679 5.81015 21 6.8781 21 8.1499C21 8.814 20.8772 9.47426 20.6317 10.1307C20.3862 10.7871 19.9545 11.5207 19.3365 12.3316C18.7186 13.1425 17.8789 14.0788 16.8173 15.1403C15.7558 16.2018 14.4026 17.4781 12.7577 18.9691L12 19.6538Z"
          fill="#F52A3B"
        />
      </g>
    </svg>
  );

  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFavorites() {
      const { data, error } = await supabase
        .from("user_company_favorites")
        .select("*")
        .eq("userid", userId)
        .eq("companyid", companyId);

      if (error) {
        console.error("Error Fetching favorites: ", error);
      } else {
        setIsFavorite(data.length > 0);
      }
      setIsLoading(false);
    }
    fetchFavorites();
  }, [userId, companyId]);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const heart = isFavorite ? favoriteHeart : defaultHeart;

  async function handleClick() {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    console.log("company id", companyId);

    if (newFavoriteStatus) {
      // If it's not a favorite, add it to the favorites.
      const { error } = await supabase
        .from("user_company_favorites")
        .insert([{ userid: userId, companyid: companyId }]);

      if (error) {
        console.error("Error inserting favorite:", error);
      } else {
        setIsFavorite(newFavoriteStatus);
      }
    } else {
      const { error } = await supabase
        .from("user_company_favorites")
        .delete()
        .eq("userid", userId)
        .eq("companyid", companyId);
      if (error) {
        console.error("Error deleting favorite: ", error);
      } else {
        setIsFavorite(newFavoriteStatus);
      }
    }
  }

  return <button onClick={handleClick}>{heart}</button>;
}

export default FavoriteHeart;
