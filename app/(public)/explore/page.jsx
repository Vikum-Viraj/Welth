"use client";

import { useConvexQuery } from "../../../hooks/use-convex.query";
import { api } from "../../../convex/_generated/api";
import React from "react";

const ExplorePage = () => {
    // Fetch current user for location
    const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);

    const { data: featuredEvents, isLoading: loadingFeatured } = useConvexQuery(
        api.explore.getFeaturedEvents,
        { limit: 3 }
    );

    const { data: localEvents, isLoading: loadingLocal } = useConvexQuery(
        api.explore.getEventsByLocation,
        {
            city: currentUser?.location?.city || "Gurugram",
            state: currentUser?.location?.state || "Haryana",
            limit: 4,
        }
    );

    const { data: popularEvents, isLoading: loadingPopular } = useConvexQuery(
        api.events.getPopularEvents,
        { limit: 6 }
    );

    const { data: categoryCounts } = useConvexQuery(
        api.events.getCategoryCounts
    );

    console.log(currentUser, featuredEvents, localEvents, popularEvents);

    return (
        <div className="text-5xl md:text-6xl font-bold mb-4">ExplorePage</div>
    );
};

export default ExplorePage;