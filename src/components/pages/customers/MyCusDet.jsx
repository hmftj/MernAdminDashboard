import React, { useEffect, useState, useRef } from "react";
import { Spin, Table, Typography, Select, Space } from "antd";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const MyCusDet = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const tableContainerRef = useRef(null);
  const pageSize = 10;

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      const formatted = data
        .map((c) => ({
          key: c.name.common,
          label: c.name.common,
          capital: c.capital?.[0] || "N/A",
          population: c.population,
          region: c.region,
          flag: c.flags?.png,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      setAllCountries(formatted);
      setFiltered(formatted);
      setDisplayed(formatted.slice(0, pageSize));
    } catch (error) {
      console.error("Error fetching countries:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const handleScroll = () => {
    const container = tableContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      const nextPage = page + 1;
      if ((nextPage - 1) * pageSize >= filtered.length) return;

      const nextItems = filtered.slice(0, nextPage * pageSize);
      setDisplayed(nextItems);
      setPage(nextPage);
    }
  };

  const handleCountrySelect = (value) => {
    if (value === "ALL") {
      setFiltered(allCountries);
      setDisplayed(allCountries.slice(0, pageSize));
      setPage(1);
      return;
    }
    const selected = allCountries.find((c) => c.label === value);
    if (selected) {
      setFiltered([selected]);
      setDisplayed([selected]);
      setPage(1);
    }
  };

  const columns = [
    { title: "Country", dataIndex: "label", key: "label" },
    { title: "Capital", dataIndex: "capital", key: "capital" },
    { title: "Population", dataIndex: "population", key: "population" },
    { title: "Region", dataIndex: "region", key: "region" },
    {
      title: "Flag",
      dataIndex: "flag",
      key: "flag",
      render: (url) => <img src={url} alt="flag" width="40" />,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <style>
        {`
        /* Table row striping */
        .ant-table-tbody > tr:nth-child(odd) {
          background-color: #f9f9f9;
        }
        .ant-table-tbody > tr:nth-child(even) {
          background-color: #ffffff;
        }
        .ant-table-tbody > tr:hover {
          background-color: #e6f7ff;
        }

        /* Dropdown styling */
        .custom-dropdown .ant-select-item:nth-child(odd) {
          background-color: #f0f0f0;
        }
        .custom-dropdown .ant-select-item:nth-child(even) {
          background-color: #ffffff;
        }
        .custom-dropdown .ant-select-item:hover {
          background-color: #bae7ff !important;
        }
      `}
      </style>

      <Title level={4}>All Countries Sir</Title>

      <Space style={{ marginBottom: 16 }}>
        <Select
          style={{ width: 300 }}
          showSearch
          placeholder="Select a country"
          onSelect={handleCountrySelect}
          dropdownClassName="custom-dropdown"
          filterOption={(input, option) =>
            option?.children?.toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value="ALL">All Countries</Option>
          {allCountries.map((country) => (
            <Option key={country.label} value={country.label}>
              {country.label}
            </Option>
          ))}
        </Select>
      </Space>

      <div
        ref={tableContainerRef}
        onScroll={handleScroll}
        style={{
          maxHeight: 500,
          overflow: "auto",
          border: "2px solid #eee",
          padding: 8,
        }}
      >
        {loading && displayed.length === 0 ? (
          <div style={{ textAlign: "center", padding: 16 }}>
            <Spin size="large" />
          </div>
        ) : (
          <Table
            dataSource={displayed}
            columns={columns}
            pagination={false}
            sticky
            rowKey="label"
          />
        )}
        {loading && displayed.length > 0 && (
          <div style={{ textAlign: "center", padding: 8 }}>
            <Spin />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCusDet;
