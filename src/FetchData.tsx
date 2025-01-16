import { ScrollArea, Table } from "@mantine/core";
import { useState, useEffect } from "react";
import CropCharts from "./CropData";

const FetchData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch the JSON data
        fetch("/src/data/data.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);



    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const rows = data.map((item, index) => (
        <Table.Tr key={index}>
            <Table.Td>{item['Year']}</Table.Td>
            <Table.Td>{item["Crop Name"]}</Table.Td>
            <Table.Td>{item["Crop Production (UOM:t(Tonnes))"] || 0}</Table.Td>
            <Table.Td>{item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0}</Table.Td>
            <Table.Td>{item["Area Under Cultivation (UOM:Ha(Hectares))"] || 0}</Table.Td>
        </Table.Tr>
    ));

    return (
        <div>
            <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Crop Data</h1>
            <div className="mainTable" style={{ border: "5px solid beige", width: "80%", margin: "auto" }}>
                <ScrollArea h={500} scrollbarSize={8}>
                    <Table withTableBorder>
                        <Table.Thead style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
                            <Table.Tr>
                                <Table.Th>Year</Table.Th>
                                <Table.Th>Crop Name</Table.Th>
                                <Table.Th>Crop Production (Tonnes)</Table.Th>
                                <Table.Th>Yield (Kg/Ha)</Table.Th>
                                <Table.Th>Area Under Cultivation (Ha)</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </ScrollArea>
            </div>
            <CropCharts data={data}></CropCharts>
        </div>
    );
}


export default FetchData;
