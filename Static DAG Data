const myMasterDagData = {
    nodes: [
        // Roles/Groups (P1 - Anita Sharma, P2 - Jane Doe)
        { id: 'P1', label: 'Dr. Anita Sharma', group: 'Professor', title: 'Specializes in Efficient ML', chaptersFinished: 12 },
        { id: 'P2', label: 'Dr. Jane Doe', group: 'Professor', title: 'Interested in Industry Collaboration', chaptersFinished: 10 },
        // Student Nodes with richer details for the Professor View
        { id: 'S1', label: 'Student: Maria R.', group: 'Student', title: 'Researching pruning algorithms', details: { GPA: 3.8, Progress: '90%', Thesis: 'Pruning Algorithms for Edge Devices' }, chaptersFinished: 8 },
        { id: 'S2', label: 'Student: Ben K.', group: 'Student', title: 'Developing OS1 integration', details: { GPA: 3.1, Progress: '65%', Thesis: 'OS Integration on ARM M0' }, chaptersFinished: 5 },
        { id: 'S3', label: 'Student: Kai L.', group: 'Student', title: 'Focus on Industry-ready prototypes', details: { GPA: 3.9, Progress: '95%', Thesis: 'Industry-Scale tinyML Prototyping' }, chaptersFinished: 9 },
        // Industry Entities
        { id: 'I1', label: 'Ecom Electronics', group: 'Industry', title: 'Sponsor of the Edge AI Project' },
        { id: 'I2', label: 'AgriTech Startup', group: 'Industry', title: 'Adopting PrA technology' },
        { id: 'I3', label: 'BigTech', group: 'Industry', title: 'Global leader in AI hardware' }, 
        // Business Entities
        { id: 'B1', label: 'Business: PCBNow', group: 'Business', title: 'Provides low-cost, fast PCB prototyping services' }, 
        // Open Source Entities
        { id: 'OS1', label: 'TinyMLx Library', group: 'OpenSource', title: 'Key tinyML toolkit, MIT License' },
        { id: 'OS2', label: 'Keras Lite API', group: 'OpenSource', title: 'Wrapper for easy deployment' },
        // Funding Entities (F1 - Fund, F2 - Donation)
        { id: 'F1', label: 'Green Tech Fund', group: 'Funding', title: 'Focus on sustainable technology' },
        { id: 'F2', label: 'Community Donation', group: 'Funding', title: 'Unrestricted funding for education' },
        // Education & Maker Nodes
        { id: 'E1', label: 'Maker Workshop', group: 'Educator', title: 'Teaches practical tinyML implementation', chaptersFinished: 12 },
        { id: 'E2', label: 'K-12 Educator: Mrs Cline', group: 'Educator', title: 'Integrating tinyML into High School curriculum', chaptersFinished: 7 }, 
        { id: 'M1', label: 'Community Maker', group: 'Maker', title: 'Prototype Builder', chaptersFinished: 6 },
        { id: 'M2', label: 'Maker: Tom', group: 'Maker', title: 'Hobbyist building tinyML projects', chaptersFinished: 4 }, 
        // Projects/Modules/Publications
        { id: 'PrA', label: 'Edge AI Project', group: 'Project', title: 'Focus: Low-power CV on microcontrollers' },
        { id: 'H1', label: 'ARM M0 Module', group: 'Hardware', title: 'Target deployment hardware' },
        { id: 'PrB', label: 'Model Compression Paper', group: 'Publication', title: 'Published in ICCV 2025' },
    ],
    edges: [
        // Professor P1 (Anita) links
        { from: 'P1', to: 'S1', label: 'Supervises', arrows: 'to' },
        { from: 'P1', to: 'S2', label: 'Supervises', arrows: 'to' },
        { from: 'P1', to: 'PrA', label: 'Leads', arrows: 'to' },
        { from: 'P1', to: 'PrB', label: 'Authored', arrows: 'to' },
        // Professor P2 (Jane) links (Industry focus)
        { from: 'P2', to: 'S3', label: 'Supervises', arrows: 'to' },
        { from: 'P2', to: 'I1', label: 'Collaborates with', arrows: 'to' },
        // Industry links
        { from: 'I1', to: 'PrA', label: 'Funds (200K)', arrows: 'to' },
        { from: 'I2', to: 'PrA', label: 'Adopts', arrows: 'to' },
        { from: 'I3', to: 'PrA', label: 'Investigates', arrows: 'to' }, 
        // Business links
        { from: 'B1', to: 'H1', label: 'Manufactures', arrows: 'to' }, 
        // Funding links
        { from: 'F1', to: 'PrA', label: 'Grants', arrows: 'to' },
        { from: 'F1', to: 'OS1', label: 'Supports', arrows: 'to' },
        { from: 'F2', to: 'E1', label: 'Funds Education', arrows: 'to' },
        // Project links
        { from: 'PrA', to: 'OS1', label: 'Uses Toolkit', arrows: 'to' },
        { from: 'PrA', to: 'H1', label: 'Targets', arrows: 'to' },
        { from: 'S1', to: 'PrB', label: 'Contributed to', arrows: 'to' },
        { from: 'S3', to: 'I1', label: 'Prototypes for', arrows: 'to' },
        // Open Source links
        { from: 'OS1', to: 'OS2', label: 'Integrates', arrows: 'to' },
        { from: 'S2', to: 'OS1', label: 'Maintains', arrows: 'to' },
        // Education/Maker links
        { from: 'E1', to: 'M1', label: 'Trains', arrows: 'to' },
        { from: 'E2', to: 'M2', label: 'Inspires', arrows: 'to' }, 
        { from: 'M1', to: 'H1', label: 'Tests on', arrows: 'to' },
        { from: 'M2', to: 'OS1', label: 'Contributes to', arrows: 'to' }, 
    ]
};

module.exports = { myMasterDagData };
