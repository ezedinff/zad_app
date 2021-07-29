// import { Box, ButtonBase, LinearProgress, Tooltip, Typography, Button } from "@material-ui/core";
// import { CheckCircle } from "@material-ui/icons";
// import routes from "app/routes";
// import React, { ReactNode } from "react";
// import { useTheme } from "styled-components";

// interface FileUploadProps {
//     value: string | null | undefined;
//     name: string;
//     onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     children?: ReactNode;
//     ImageChanged?: Boolean;
//     uploading: boolean;
//     uploadProgress: number;
//     imageRoute?: String;
//     isApproved?: Boolean;
//     newUploaded?: boolean;
//     onDeleteFile: () => void;
//     onUpload: () => void;
//   }

//   export const FileUploadBox = (props: FileUploadProps) => {
//     const theme = useTheme();

//     return (
//       <Box display="flex" flexDirection="column">
//         <Box style={{ position: 'relative' }} display="flex">
//           <Box
//             position="absolute"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             style={{ width: '100%', height: '100%' }}
//           >
//             {props.value || props.imageRoute ? null : (
//               <DocumetsImage
//                 style={{
//                   width: 200,
//                   height: 140,
//                 }}
//               />
//             )}
//           </Box>
//           <input
//             // name={props.name}
//             style={{ display: 'none' }}
//             accept="image/*"
//             id={`document-file-input-${props.name}`}
//             type="file"
//             onChange={props.onImageChange}
//           />
//           <label htmlFor={`document-file-input-${props.name}`}>
//             <ButtonBase
//               style={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 zIndex: 1,
//                 background: theme.palette.background.default,
//                 width: 350,
//                 height: 250,
//                 opacity: props.value ? 1 : 0.8,
//                 justifyContent: 'space-evenly',
//                 border: `1px solid ${theme.palette.grey[400]}`,
//                 borderRadius: `${theme.shape.borderRadius}px`,
//                 padding: `${theme.spacing(2)}px `,
//               }}
//               component="span"
//               disabled={props.uploading}
//             >
//               {props.value ? (
//                 <img
//                   src={props.value || ''}
//                   alt="uploaded"
//                   style={{
//                     width: 200,
//                     height: 140,
//                   }}
//                 />
//               ) : props.imageRoute ? (
//                 <SecureImage
//                   route={`${routes.user.getImportantDocument}/${props.imageRoute}`}
//                   style={{ width: 200, height: 140 }}
//                 />
//               ) : (
//                 props.children
//               )}
//               {props.uploading && (
//                 <LinearProgress
//                   variant="buffer"
//                   value={props.uploadProgress}
//                   style={{ width: '100%' }}
//                 />
//               )}
//               {!props.isApproved && props.imageRoute && (
//                 <Tooltip
//                   title={
//                     'This document is not currently approved by an admin. Tutor seekers will not be able to see you until this is approved.'
//                   }
//                 >
//                   <Error htmlColor={theme.palette.warning.light} />
//                 </Tooltip>
//               )}

//               {props.isApproved && props.imageRoute && (
//                 <Tooltip title={'This document have been approved'}>
//                   <CheckCircle htmlColor={theme.palette.success.main} />
//                 </Tooltip>
//               )}
//             </ButtonBase>
//           </label>
//         </Box>
//         <Box my={2}>
//           {(props.value || props.imageRoute) && (
//             <>
//               <Typography style={{ fontWeight: 'bold' }}>{props.name}</Typography>
//               <Typography
//                 style={{ width: 350 }}
//                 variant="subtitle2"
//                 color="textSecondary"
//               >
//                 Click the image to change it.
//                 {props.value && !props.newUploaded
//                   ? ` Click the Upload File button to
//                 upload the scanned ${props.name} file and save it on your profile.`
//                   : props.imageRoute
//                   ? ` Press the delete button to remove the submission`
//                   : ``}
//               </Typography>
//               {(props.value || props.imageRoute) && (
//                 <Button
//                   disabled={props.uploading}
//                   color={
//                     props.value && !props.newUploaded ? 'primary' : 'secondary'
//                   }
//                   variant="contained"
//                   disableElevation
//                   onClick={
//                     props.value && !props.newUploaded
//                       ? () => props.onUpload()
//                       : () => props.onDeleteFile()
//                   }
//                 >
//                   {props.value && !props.newUploaded
//                     ? 'Upload File'
//                     : 'Delete Entry'}
//                 </Button>
//               )}
//             </>
//           )}
//         </Box>
//       </Box>
//     );
//   };

//   export default FileUploadBox;

export default {};
