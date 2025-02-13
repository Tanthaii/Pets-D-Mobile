import React, { useState, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { PestList } from "../components/PestList";
import { PestDetails } from "../components/PestDetails";
import { PestFilters } from "../components/PestFilters";
import { SearchBar } from "../components/SearchBar";
import { mockPests, categories, threatLevels } from "../data/pests";
import PestInformationStyles from "../styles/PestInformationStyles";
import type { Pest } from "../components/types";

export function PestInformation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedThreatLevel, setSelectedThreatLevel] = useState("All");
  const [selectedPest, setSelectedPest] = useState<Pest | null>(null);

  const filteredPests = useMemo(() => {
    return mockPests.filter((pest) => {
      const matchesSearch =
        pest.common_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pest.scientific_name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        pest.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || pest.category === selectedCategory;

      const matchesThreat =
        selectedThreatLevel === "All" ||
        pest.threat_level === selectedThreatLevel;

      return matchesSearch && matchesCategory && matchesThreat;
    });
  }, [searchQuery, selectedCategory, selectedThreatLevel]);

  return (
    <ScrollView style={PestInformationStyles.container}>
      <SearchBar
        placeholder="Search pests by name, scientific name, or description..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <PestFilters
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedThreatLevel={selectedThreatLevel}
        setSelectedThreatLevel={setSelectedThreatLevel}
        categories={categories}
        threatLevels={threatLevels}
      />
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <PestList
            pests={mockPests} // mockPests ที่ปรับให้ threat_level ตรงกับ type Pest
            onSelectPest={(pest) =>
              setSelectedPest({
                ...pest,
                created_at: pest.created_at || new Date().toISOString(),
              })
            }
            selectedPestId={selectedPest?.id || null}
          />
        </View>
        {selectedPest && <PestDetails pest={selectedPest} />}
      </View>
    </ScrollView>
  );
}
