import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import "./Education.css";

export default function CustomizedTimeline() {
	return (
		<div className="container__education">
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineOppositeContent
						sx={{ m: "auto 0" }}
						align="right"
						variant="body2"
					>
						7 Months Long 11-11-6 Curriculum
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot>
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							MASAI School
						</Typography>
						<Typography>FULL STACK WEB DEVELOPMENT</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
						Master of Science
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color="primary">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Central University Of Punjab
						</Typography>
						<Typography>Geology</Typography>
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
						Bachelor of Science
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector />
						<TimelineDot color="primary" variant="outlined">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							St. Xavier's College, Ranchi
						</Typography>
						{/* <Typography>Geology(Honours),Physics,Chemistry</Typography> */}
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
						Intermediate
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
						<TimelineDot color="secondary">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Tender Heart Sr.Sec.School
						</Typography>
						{/* <Typography>
							English, Computer Science, Physics, Chemistry, Biology
						</Typography> */}
					</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
						Matriculation
					</TimelineOppositeContent>
					<TimelineSeparator>
						<TimelineConnector sx={{ bgcolor: "secondary.main" }} />
						<TimelineDot color="secondary">
							<SchoolIcon />
						</TimelineDot>
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent sx={{ py: "12px", px: 2 }}>
						<Typography variant="h6" component="span">
							Tender Heart Sr.Sec.School
						</Typography>
						{/* <Typography>
							English, Computer Science, Physics, Chemistry, Biology
						</Typography> */}
					</TimelineContent>
				</TimelineItem>
			</Timeline>
		</div>
	);
}
