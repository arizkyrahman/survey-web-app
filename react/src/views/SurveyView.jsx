import { useState } from "react";
import PageComponent from "../components/PageComponent";

export const SurveyView = () => {
  const [survey, setSurvey] = useState({
    title: "",
    slug: "",
    status: false,
    description: "",
    image: null,
    image_url: null,
    expire_date: "",
    questions: [],
  });

  return (
    <PageComponent title="Create new Survey">
      <form action="#" method="post" onSubmit={onSubmit}>
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
            {/*image*/}

            {/*image*/}
          </div>
        </div>
      </form>
    </PageComponent>
  );
};
