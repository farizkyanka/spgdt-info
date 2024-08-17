"use client";

import AdvancedSearch from "./AdvancedSearch";
import { FormSearchOptionsProvider } from "./SearchBarSchema";

export default function AdvancedSearchField() {
  return (
    <FormSearchOptionsProvider>
      <AdvancedSearch />
    </FormSearchOptionsProvider>
  );
}
