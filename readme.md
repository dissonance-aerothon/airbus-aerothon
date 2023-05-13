# Requirements



We need to create a data lake with a normalized database to reduce redundancy, i
dentify the redundant data from the forecasted data, 
create an automation process for data stamping (approval) the real-time data, 
and create dashboards for users and data officers to access and monitor the data, respectively.

1. Create a data lake using a normalized database to reduce redundancy.
2. Identify redundant data from the forecasted data
3. Develop an automation process to stamp (approve) real-time data.
4. Create dashboards for domain users to access the data required for their 
   domains and allow for forecast and real-time data creation.
5. Create a dashboard for the data officer to monitor the data stamping process.
6. Authenticate and authorize users based on their department.
7. Ensure the platform is scalable and performant.

<br> <br>


There are many reduendent data in table if you see for eg: pump is twice 
so we need to break it down to BCNF (best) or 3 normal form



## Data-Flow Diagram

                          ┌───────────┐
                          │ Data Lake │
                          └───────────┘
                                │
                                ▼
                  ┌──────────────────────────┐
                  │ ETL Process for Data Lake │
                  └──────────────────────────┘
                                │
                                ▼
       ┌───────────────────┐     ┌─────────────────────┐
       │ Fabrication Data  │     │ Sub-Assembly Data    │
       └───────────────────┘     └─────────────────────┘
                  │                          │
                  ▼                          ▼
     ┌─────────────────────┐    ┌─────────────────────┐
     │ Data Stamping (Approval)│    │ Data Stamping (Approval)│
     │    for Real-Time Data   │    │    for Real-Time Data   │
     └─────────────────────┘    └─────────────────────┘
                  │                          │
                  ▼                          ▼
     ┌─────────────────────┐    ┌─────────────────────┐
     │ Fabrication Dashboard │    │ Sub-Assembly Dashboard│
     └─────────────────────┘    └─────────────────────┘
                  │                          │
                  ▼                          ▼
     ┌─────────────────────┐    ┌─────────────────────┐
     │   Data Officer's     │    │   Data Officer's     │
     │ Monitoring Dashboard │    │ Monitoring Dashboard │
     └─────────────────────┘    └─────────────────────┘

## ER Diagram

      +----------------+          +-----------------+        +---------------+
      |     Model      |          |      Type       |        |   Milestone   |
      +----------------+          +-----------------+        +---------------+
      | model_id (PK)  |          | type_id (PK)    |        | milestone_id  |
      | name           |          | name            |        | name          |
      | description    |          | description     |        +---------------+
      +----------------+          +-----------------+
              |                             |
              |                             |
         +----------+                  +----------+
         | Part     |                  | Supplier |
         +----------+                  +----------+
         | part_id (PK) |              | supplier_id (PK) |
         | name         |              | name            |
         | description  |              | address         |
         +----------+                  +---------------+
                |                               |
                |                               |
        +------------------+           +---------------+
        | ManufacturingUnit|           |      Order    |
        +------------------+           +---------------+
        | unit_id (PK)      |           | order_id (PK) |
        | name              |           | order_date    |
        | location          |           | delivery_date |
        +------------------+           | quantity      |
                                        +---------------+










# ER Diagram

                                +--------------+
+----------------+    +--->    |  Manufacturing   |
|     Domain     |    |         |      Stage      |
+----------------+    |         +-------+--------+
                       |                 |
                       |            +----+-----+
                       |            |  Fabrication  |
                       |            +-------+------+
                       |                     |
                       |               +-----+-----+
                       |               | Sub-assembly |
                       |               +-------+------+
                       |                         |
                       |                   +---+------+
                       |                   |  Assembly |
                       |                   +-----------+
                       | 
                       |
                       |
               +-------+---------+
               |   Data Lake     |
               +--------+-------+
                        |
             +----------+-----------+
             |                      |
+------------------+     +-----------------------+
|   Normalized DB  |     |    Data Stamping System |
+------------------+     +-----------------------+
                        |
              +---------+--------+
              |                  |
      +-----------+      +-------------+
      | Dashboard |      | Data Officer |
      +-----------+      +-------------+

  



# Frontend







                                +--------------+
+----------------+    +--->    |  Manufacturing   |
|     Domain     |    |         |      Stage      |
+----------------+    |         +-------+--------+
                       |                 |
                       |            +----+-----+
                       |            |  Fabrication  |
                       |            +-------+------+
                       |                     |
                       |               +-----+-----+
                       |               | Sub-assembly |
                       |               +-------+------+
                       |                         |
                       |                   +---+------+
                       |                   |  Assembly |
                       |                   +-----------+
                       | 
                       |
                       |
               +-------+---------+
               |   Data Lake     |
               +--------+-------+
                        |
             +----------+-----------+
             |                      |
+------------------+     +-----------------------+
|   Normalized DB  |     |    Data Stamping System |
+------------------+     +-----------------------+
                        |
              +---------+--------+
              |                  |
      +-----------+      +-------------+
      | Dashboard |      | Data Officer |
      +-----------+      +-------------+
